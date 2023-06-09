import styled from "styled-components";

const TextWrapper = styled.div`
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    .title {
        margin-bottom: 0.7rem;
    }
    .text {
        width: 270px;
        height: 270px;
    }

    input, textarea {
        &::-webkit-scrollbar {
            display: none;
        }

        resize: none;
        font-size: 15px;
        font-weight: 500;
        font-family: 'Nirmala', sans-serif;
        border: 1px solid whitesmoke;
        border-radius: 5px;
        transition: border 1s;
        padding: 5px;
        box-sizing: border-box;

        &:focus{
            outline: none;
            border: 3px solid skyblue;
        }
    }
`
const TextArea = ({ setTitle, setContent, title, content }) => {
    return (
        <>
            <TextWrapper>
                <input
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    className="title"
                    placeholder="제목을 입력하세요"
                    value={title}
                />
                <textarea
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                    className="text"
                    placeholder="내용을 입력하세요"
                    value={content}
                />
            </TextWrapper>
        </>
    );
};

export default TextArea;