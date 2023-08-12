import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link'],
        ['clean'],
    ],
};

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'code',
];

const Editor = ({ value, onChange }) => {
    return (
        <div>
            <ReactQuill
                className='text-black mb-10 h-[400px]'
                modules={modules}
                formats={formats}
                value={value}
                onChange={onChange} />
        </div>
    )
}

export default Editor