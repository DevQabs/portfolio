import React from 'react';
import 'babel-polyfill';
import {useState, useEffect} from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../utils/CodeBlock';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../posts/effectiveJava', false, /\.md$/));


function Posts() {
    const [file, setFile] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
            .catch((err) => console.error(err));

            setFile([...file,...posts]);
        }

        fetchData();
    }, [])

    return (
        <React.Fragment>
            <div>
                {file.map((item, index) => {
                    return (
                        <div key={index}>
                            <ReactMarkdown source={item} renderers={{code : CodeBlock}}/>
                        <hr/>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    )
}

export default Posts;