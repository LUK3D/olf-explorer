import {Settings} from "../../../../types";

/**
 * ## File Model
 * Defines all files attributes including informations such as:
 * File Name,
 * Extensio,
 * Link,
 * Size...
 * 
 */
export interface FileModel{
    /**Component Unique identifier */
    key:string,
    /**File Mime type */
    type?:string,
    /**The name of the file */
    filename?:string,
    /**File extention */
    extension?:string,
    /**Online link that refers to this file */
    link?:string,
    /**The size of the file in Megabytes (MB) */
    size?:number,
    /**Creation Date */
    createdAt?:Date,
    /**Last Modification Date */
    modifiedAt?:Date,
    /**Last time the file has been accessed */
    accessedAt?:Date,
    /**The creator of the file */
    creator?:string,
    /**The current owner of the file */
    owner?:string,
    /**An ecnrypted password for the file */
    secret?:string,
    /**Defines de Aplication configuration */
    settings?:Settings,
    selectFile:Function
}