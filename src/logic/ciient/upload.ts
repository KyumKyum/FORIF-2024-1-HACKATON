import axios from "axios";

const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const uploadFile = async (file: File, content: string) => {
    const url = "http://localhost:3000/api/upload"
    const name = generateRandomString(10);

    const form = new FormData();

    // FormData에 필드 추가
    form.append('name', name);
    form.append('file', file);
    form.append('content', content);

    await axios.post(url, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export default uploadFile;