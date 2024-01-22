import Proptypes from 'prop-types';
import FavoriteButton from '../FavoriteButton';

const RoomCard = (props) => {
  console.log(props);
  return (
    <a href="#">
      <article className="flex flex-col bg-white cursor-pointer">
        <div className="flex-1 relative">
          <img
            src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw70188a30/images/2050000/2054121.jpg?sw=1200"
            alt="img"
          />
          <div className='absolute z-10 top-3 right-3 hover:text-black'>
            <FavoriteButton />

          </div>
        </div>
        <div className="h-28 text-xs px-10 py-2 text-gray-500">
          <p className="my-3">Living rooms</p>
          <p className="mb-2">Rec, retail price</p>
          <p className="text-black text-sm">Buy all for £9,582.15</p>
        </div>
      </article>
    </a>
  );
};

RoomCard.propTypes = {
  props: Proptypes.object,
}

export default RoomCard;
