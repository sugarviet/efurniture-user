import Cookies from 'js-cookie';
import { CLIENT_ID } from '../constants/token';

const clientId = () => Cookies.get(CLIENT_ID);
export const get_user_info_detail = () => {
    return `/account/${clientId()}`;
}

export const get_update_name = () => {
    return `/account/${clientId()}`;
}


export const get_update_user_password = () => {
    return `/account/password/${clientId()}`;

}

export const get_addresses = () => {
    return '/address';
}
