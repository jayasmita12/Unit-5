import styled from "styled-components"

 const Button = styled.button`

    margin: 50px;
    cursor: pointer;
    padding:15px 30px ;
    border:0;
    background-color: ${(props)=>
        props.theme === "primary" ? "#0000ff":"#f6f6fd"
    };
    color:${(props)=>
        props.theme === "primary" ? "#f6f6fd": props.theme==="linkbtn" ? "#0000ff":"#000"
    };
    border:2px #0000ff ${(props)=>
        props.theme === "dashed" && props.theme !="textbtn"  ? "dotted": props.theme==="defaultt" ? "solid":""
    };


    &:hover{
        background-color: ${(props)=>
        props.theme === "textbtn"  ? "#aaaab3":""
    }; 
    }
    
`;

export {Button}







