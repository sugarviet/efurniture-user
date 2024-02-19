import axios from "axios"

export const get_data = async url => {
    const data = await axios.get(url).then(response => response.data).then(data => data.metaData);

    return data;
}