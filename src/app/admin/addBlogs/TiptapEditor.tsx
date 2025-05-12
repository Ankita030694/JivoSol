'use client'
import React, { useEffect, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import Highlight from '@tiptap/extension-highlight'
import Color from '@tiptap/extension-color'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import CodeBlock from '@tiptap/extension-code-block'
import Heading, { Level } from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBold, faItalic, faUnderline, faStrikethrough, faLink, faImage, 
  faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faHighlighter,
  faTable, faCode, faHeading, faListUl, faListOl, faCheckSquare,
  faSubscript, faSuperscript, faUndo, faRedo, faPaintBrush,
  faRemoveFormat, faIndent, faOutdent
} from '@fortawesome/free-solid-svg-icons'

interface TiptapEditorProps {
  content: string
  onChange: (content: string) => void
  className?: string
}

const TiptapEditor = ({ content, onChange, className = '' }: TiptapEditorProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(false)

  // Configure the editor with all extensions
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline cursor-pointer',
        },
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: 'Write your blog content here...',
      }),
      Highlight,
      Color,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      CodeBlock,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      BulletList,
      OrderedList,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Subscript,
      Superscript,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  // Handle client-side rendering
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Update content when it changes externally
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  if (!isMounted) {
    return null
  }

  // Add link handler
  const setLink = () => {
    if (!editor) return
    
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)
    
    // cancelled
    if (url === null) return
    
    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    
    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  // Add image handler
  const addImage = () => {
    if (!editor) return
    
    const url = window.prompt('Image URL')
    
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  // Add table handler
  const addTable = () => {
    if (!editor) return
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
  }

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#000000']

  if (!editor) {
    return null
  }

  return (
    <div className={`tiptap-editor border border-gray-300 rounded-md overflow-hidden ${className}`}>
      <div className="tiptap-toolbar flex flex-wrap gap-1 p-1 bg-gray-100 border-b border-gray-300">
        {/* Text formatting */}
        <button 
          onClick={() => editor.chain().focus().toggleBold().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('bold') ? 'bg-gray-300' : ''}`}
          title="Bold"
        >
          <FontAwesomeIcon icon={faBold} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().toggleItalic().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('italic') ? 'bg-gray-300' : ''}`}
          title="Italic"
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().toggleUnderline().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('underline') ? 'bg-gray-300' : ''}`}
          title="Underline"
        >
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().toggleStrike().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('strike') ? 'bg-gray-300' : ''}`}
          title="Strikethrough"
        >
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>

        <div className="mx-1 border-r border-gray-300"></div>

        {/* Heading */}
        <select
          onChange={(e) => {
            const level = parseInt(e.target.value);
            if (level === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level: level as Level }).run();
            }
          }}
          value={
            editor.isActive('heading', { level: 1 }) ? '1' :
            editor.isActive('heading', { level: 2 }) ? '2' :
            editor.isActive('heading', { level: 3 }) ? '3' :
            '0'
          }
          className="p-1 rounded bg-white border border-gray-300 text-sm text-gray-700"
        >
          <option value="0">Paragraph</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
        </select>

        <div className="mx-1 border-r border-gray-300"></div>

        {/* Lists */}
        <button 
          onClick={() => editor.chain().focus().toggleBulletList().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('bulletList') ? 'bg-gray-300' : ''}`}
          title="Bullet List"
        >
          <FontAwesomeIcon icon={faListUl} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().toggleOrderedList().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('orderedList') ? 'bg-gray-300' : ''}`}
          title="Ordered List"
        >
          <FontAwesomeIcon icon={faListOl} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().toggleTaskList().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('taskList') ? 'bg-gray-300' : ''}`}
          title="Task List"
        >
          <FontAwesomeIcon icon={faCheckSquare} />
        </button>

        <div className="mx-1 border-r border-gray-300"></div>

        {/* Text alignment */}
        <button 
          onClick={() => editor.chain().focus().setTextAlign('left').run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-300' : ''}`}
          title="Align Left"
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().setTextAlign('center').run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-300' : ''}`}
          title="Align Center"
        >
          <FontAwesomeIcon icon={faAlignCenter} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().setTextAlign('right').run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-300' : ''}`}
          title="Align Right"
        >
          <FontAwesomeIcon icon={faAlignRight} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().setTextAlign('justify').run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-300' : ''}`}
          title="Justify"
        >
          <FontAwesomeIcon icon={faAlignJustify} />
        </button>

        <div className="mx-1 border-r border-gray-300"></div>
        
        {/* Insert options */}
        <button onClick={setLink} className="p-2 rounded hover:bg-gray-200 text-gray-700" title="Insert Link">
          <FontAwesomeIcon icon={faLink} />
        </button>
        
        <button onClick={addImage} className="p-2 rounded hover:bg-gray-200 text-gray-700" title="Insert Image">
          <FontAwesomeIcon icon={faImage} />
        </button>
        
        <button onClick={addTable} className="p-2 rounded hover:bg-gray-200 text-gray-700" title="Insert Table">
          <FontAwesomeIcon icon={faTable} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().toggleCodeBlock().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('codeBlock') ? 'bg-gray-300' : ''}`}
          title="Code Block"
        >
          <FontAwesomeIcon icon={faCode} />
        </button>

        <div className="mx-1 border-r border-gray-300"></div>
        
        {/* Advanced formatting */}
        <div className="relative">
          <button 
            onClick={() => setShowColorPicker(!showColorPicker)} 
            className="p-2 rounded hover:bg-gray-200 text-gray-700"
            title="Text Color"
          >
            <FontAwesomeIcon icon={faPaintBrush} />
          </button>
          
          {showColorPicker && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg p-2 flex gap-1 z-10">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    editor.chain().focus().setColor(color).run();
                    setShowColorPicker(false);
                  }}
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
              <button
                onClick={() => {
                  editor.chain().focus().unsetColor().run();
                  setShowColorPicker(false);
                }}
                className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center"
                title="Remove color"
              >
                <span className="text-xs">✕</span>
              </button>
            </div>
          )}
        </div>
        
        <button 
          onClick={() => editor.chain().focus().toggleHighlight().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('highlight') ? 'bg-gray-300' : ''}`}
          title="Highlight"
        >
          <FontAwesomeIcon icon={faHighlighter} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().toggleSubscript().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('subscript') ? 'bg-gray-300' : ''}`}
          title="Subscript"
        >
          <FontAwesomeIcon icon={faSubscript} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().toggleSuperscript().run()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${editor.isActive('superscript') ? 'bg-gray-300' : ''}`}
          title="Superscript"
        >
          <FontAwesomeIcon icon={faSuperscript} />
        </button>

        <div className="mx-1 border-r border-gray-300"></div>
        
        {/* History */}
        <button 
          onClick={() => editor.chain().focus().undo().run()} 
          disabled={!editor.can().undo()}
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${!editor.can().undo() ? 'opacity-50' : ''}`}
          title="Undo"
        >
          <FontAwesomeIcon icon={faUndo} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()} 
          className={`p-2 rounded hover:bg-gray-200 text-gray-700 ${!editor.can().redo() ? 'opacity-50' : ''}`}
          title="Redo"
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
        
        <button 
          onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} 
          className="p-2 rounded hover:bg-gray-200 text-gray-700"
          title="Clear Formatting"
        >
          <FontAwesomeIcon icon={faRemoveFormat} />
        </button>
      </div>
      
      <EditorContent 
        editor={editor} 
        className="prose max-w-none p-4 min-h-[300px] focus:outline-none bg-white text-black rounded-b-md w-full h-full overflow-y-auto" 
      />
      <style jsx global>{`
        .ProseMirror {
          min-height: 300px;
          outline: none;
          height: 100%;
        }
        .ProseMirror p {
          margin: 0.5em 0;
        }
      `}</style>
    </div>
  )
}

export default TiptapEditor