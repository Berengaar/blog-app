import React, { useState } from 'react'
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface State {
    editorState: EditorState;
    editMode: boolean;
}
const WriteWrapper = () => {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
    const writeToConsole = () => {
        console.log("state", editorState);
    }

    return (
        <div className='border'>
            <div className="editor">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={newState => {
                        setEditorState(newState);
                    }}
                />
            </div>
            <div>
                <button onClick={() => writeToConsole()}>Tıkla</button>
            </div>
        </div>
    )
}

export default WriteWrapper
