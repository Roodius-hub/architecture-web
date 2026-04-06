

export const geturl = async () => {
    const response = await fetch("http://localhost:3001/admin/GetURL")
    const data = await response.json();
    console.log(data);

    return data
}

