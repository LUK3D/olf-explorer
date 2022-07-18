import { useState,useEffect} from 'react'
import {FileDroped, FolderListType, Settings} from "../../../types";
import { SimpleRepository, User } from 'git/types';
import { GetFunctions } from 'git/auth';
import { StorageKeys } from '../../../constants/storageKeys';
import { notification } from 'renderer/Components/notification';
import { toast } from 'react-toastify';

export default ()=>{

    function maximize(){
        window.electron.ipcRenderer.sendMessage('ipc-run-cmd', ['window-maximize']);
    }
    function minimize(){
        window.electron.ipcRenderer.sendMessage('ipc-run-cmd', ['window-minimize']);
    }
    
    const [settings, setSettings] = useState<Settings>({
        folderListType:FolderListType.grid
    })
    const [user, setUser] = useState<User|null>(null);
    
    const [darkmode, setDarkmode] = useState<boolean>(false)
    
    const [showPopUp,setShowPopUp] = useState<boolean>(false);
    
    const [folders,setFolders] = useState<Array<SimpleRepository>>([])
    
    const [fileicon,setFileIcon] = useState<FileDroped|null>(null);
    const [progress,setProgress] = useState<number>(0);
    const [isLoading,setisLoading] = useState<boolean>(false);
    const [notifications, setNotifications] = useState<Array<notification>>([
        {
          notification_id:"notification_" + Date.now()+(Object.keys(5).map(x=>Math.random())).join(''),
            expanded:false,
            content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsum aperiam vel rerum ea officia totam debitis commodi veritatis. Voluptatem, rem sapiente? Quasi assumenda id quibusdam veniam architecto omnis inventore?"
        },
        {
          notification_id:"notification_" + Date.now()+(Object.keys(5).map(x=>Math.random())).join(''),
            expanded:false,
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam fugit voluptatum labore tempore cumque, culpa, ipsum possimus doloremque, ullam debitis explicabo voluptatem minus. Dolor nam quas doloribus similique qui?" 
        },
    ]);

    const [filUpload, setFilUpload] = useState(false);
    
    const [showNotification, setShowNotification] = useState<boolean>(false);

    let toastIt = ()=> toast("Creating Github Repositor for this file",{autoClose:5000,toastId:new Date().toString()});
    
    let stage = 1;

    useEffect(()=>{
        setSettings({...settings, darkmod: darkmode})
        localStorage.setItem(StorageKeys.generalSettings, JSON.stringify(settings));
      },[darkmode]);
    

      useEffect(() => {
        let tmp_settings = localStorage.getItem(StorageKeys.generalSettings);
    
        if(tmp_settings){
         
          setSettings(JSON.parse(tmp_settings));
        }
    
        setDarkmode(settings.darkmod==true);
    
        login(localStorage.getItem(StorageKeys.userSecret));
      }, []);

      useEffect(() => {
        setTimeout(() => {
          setFileIcon(null)
        }, 300);
      }, [filUpload]);
      
    
      window.electron.ipcRenderer.on('addIcon',(args)=>{
        let data = args;
        //@ts-ignore
        data.Base64ImageData = "data:image/png;base64,"+ data.Base64ImageData;
        console.log(args);
        setFileIcon(args as FileDroped)
      })
      
      
      window.electron.ipcRenderer.on('addLoading',(args)=>{
        //@ts-ignore
        let _progress = ((stage/fileicon?.sizes?.chunks??1)*100 );
        if(_progress>progress){
          setProgress(Math.round(_progress));
      
      
          if(fileicon?.sizes?.chunks)
          if(stage>=fileicon?.sizes?.chunks){
            stage=0;
            setProgress(0);
            setisLoading(false);
            setFileIcon(null);
            console.log("Adcionando notificacoes");
            addNotification("Creating Github Repositor for "+(fileicon.Path??'').split("\\").at(-1)?.split("/").at(-1)+". Please, wait...");
            toastIt();
            setFilUpload(false);
           
          }else{
            stage+=1;
          }
      
        }
      
         
      })
    
      
    
      function addFolders(folders:Array<SimpleRepository>) {
    setFolders(folders);
    }
    
    
    function addNotification(content:string, isLoading?:false) {
        setNotifications([{content,expanded:true,isLoading:isLoading, notification_id:"notification_" + Date.now()+(Object.keys(5).map(x=>Math.random())).join('')},...notifications]);
        setShowNotification(true);
    }
    
    var otk:GetFunctions;

    async function login(token:string|null){
    if(!token){
        //No Token Provided
        return;
    }

    if(token.trim().length ==0){
        //No Token provided
        return;
    }
    
    otk = await new GetFunctions(token);
    setUser( (await otk.getUserInfo()).data);
    var repos = await otk.getRepos();
    //@ts-ignore
    addFolders(repos.data);
    localStorage.setItem(StorageKeys.userSecret,token);
    }
    
  
    function fragmentFile(){
    
    
    
    
      setisLoading(true);
      stage = 0;
      setProgress(0);
      window.electron.ipcRenderer.sendMessage('ipc-run-cmd', ['file-fragment', fileicon?.Path??'']);
    }
    
    function dropHandler(ev:any) {
      console.log('File(s) dropped');
    
      // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
      ev.preventDefault();
    
      if (ev.dataTransfer.items) {
        // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
    
    
          var file = ev.dataTransfer.items[0].getAsFile();
          window.electron.ipcRenderer.sendMessage('ipc-run-cmd', ['file-getIcon',file.path]);
    
    
        // for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        //   // Se os itens soltos não forem arquivos, rejeite-os
        //   if (ev.dataTransfer.items[i].kind === 'file') {
    
            
        //     var file = ev.dataTransfer.items[i].getAsFile();
            
        //     window.electron.ipcRenderer.sendMessage('ipc-run-cmd', ['file-getIcon',file.path]);
        //     console.log('... file[' + i + '].name = ' + file.name);
        //   }
        // }
      } else {
        // Use a interface DataTransfer para acessar o (s) arquivo (s)
    
        var file = ev.dataTransfer.files[0].getAsFile();
          window.electron.ipcRenderer.sendMessage('ipc-run-cmd', ['file-getIcon',file.path]);
    
        // for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        //   console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        // }
      }
    }
    
    function dragOverHandler(ev:any) {
    console.log('File(s) in drop zone');
    
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();
    }
    
    return {
        dragOverHandler,
        dropHandler,
        fragmentFile,
        login,
        addNotification,
        addFolders,
        toastIt,
        showNotification, setShowNotification,
        settings,
        setSettings,
        user,
        darkmode,
        setDarkmode,
        showPopUp,setShowPopUp,
        folders,setFolders,
        fileicon,setFileIcon,
        progress,setProgress,
        isLoading,setisLoading,
        minimize,
        maximize,
        filUpload,
        setFilUpload,
        notifications, 
        setNotifications,
    }
}