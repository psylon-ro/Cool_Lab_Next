import {create} from 'zustand'
const defaulValues={id:"",title:""}

interface IRenameModal{
isOpen:boolean;
initialValues:typeof defaulValues;
onOpen:(id:string,title:string)=>void;
onClose:()=>void;
};

export const useRenameModel=create<IRenameModal>((set)=>({
    isOpen:false,
    onOpen:(id,title)=>set({
        isOpen:true,
        initialValues:{id,title}
    }),
    onClose:()=>set({
        isOpen:false,
        initialValues:defaulValues,
    }),
    initialValues:defaulValues
}))