import File from "./file";
import './folder.css';
import { useState } from "react";
import Input from "./Input";

const Folder = ({ folder }) => {
    const [type, setType] = useState();
    const [addItem, setAddItem] = useState();
    const [itemName, setItemName] = useState();
    const [expand, setExpand] = useState();

    function onBlur() {
        console.log(itemName);
        
        if(itemName) {
            const newItem = {
                id: Math.round(Math.random()),
                type,
                name: itemName,
                add: false,
                items: type === 'folder' ? [] : null
            }
            folder.items.push(newItem);
            setAddItem(false);
            setItemName("");
        }

        setAddItem(false);
    }


  return (
    <div className="folder_parent">
        <div className="folder" onClick={() => setExpand(!expand)}>
            <h2>{folder.name}</h2>
            <div onClick={(e) => {
                setAddItem(!addItem)
                e.stopPropagation();
                }}>
                <button onClick={() => setType('file')}>Add File</button>
                <button onClick={() => setType('folder')}>Add Folder</button>
            </div>
        </div>
        {addItem && <Input type={type} value={itemName} setItemName={setItemName} onBlur={onBlur}/>}
        {folder.items &&
            folder.items.map((item, index) => {
            return (
                <div className="folder" key={index} style={{display: expand ? 'block' : 'none'}}>
                {item.type === "folder" ? (
                    <Folder folder={item} />
                ) : (
                    <File file={item} />
                )}
                </div>
            );
        })}
    </div>
  );
};

export default Folder;