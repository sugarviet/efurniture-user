
const rooms = ['living-room', 'kitchen', 'dining-room']
export default function useCheckRightSlug(){
     
    
    const handleCheckRoom = (room) => {
        console.log(room);
        if(!rooms.includes(room)) return false;

        return true;
    }

    return {
        handleCheckRoom
    };
}