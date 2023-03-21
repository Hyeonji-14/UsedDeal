import { Button } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
`

const ImgWrapper = styled.div`
    img {
        width: 270px;
        height: 270px;
        object-fit: cover;
    }
`

const UploadBtn = styled.button`
    margin: 10px 5px;
    font-size: 1.1rem;
`
const ImageUploader = ({ preview_URL, setImage }) => {
    let inputRef;

    const saveImage = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        if (e.target.files[0]) {
            fileReader.readAsDataURL(e.target.files[0]);
        }
        fileReader.onload = () => {
            setImage({
                image_file: e.target.files[0],
                preview_URL: fileReader.result,
            });
        };
    };

    return (
        <>
            <Wrapper>
                <input
                    type="file"
                    accept="image/*"
                    onChange={saveImage}
                    ref={(refParam) => (inputRef = refParam)}
                    style={{ display: "none" }}
                />
                <ImgWrapper>
                    <img src={preview_URL} />
                </ImgWrapper>
                <UploadBtn>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => inputRef.click()}
                    >
                        Image Choise
                    </Button>
                </UploadBtn>
            </Wrapper>
        </>
    );
};

export default ImageUploader;