import { List } from "antd";
import Proptypes from "prop-types";

const HorizontalList = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  gutters,
  data,
  dataItem,
}) => {
  return (
    <div className="w-full mx-auto">
      <List
        grid={{
          gutter: gutters,
          xs,
          sm,
          md,
          lg,
          xl,
          xxl,
        }}
        dataSource={data}
        renderItem={(item) => <List.Item>{dataItem(item)}</List.Item>}
      />
    </div>
  );
};

HorizontalList.propTypes = {
  xs: Proptypes.number,
  sm: Proptypes.number,
  md: Proptypes.number,
  lg: Proptypes.number,
  xl: Proptypes.number,
  xxl: Proptypes.number,
  data: Proptypes.array.isRequired,
  dataItem: Proptypes.func.isRequired,
  gutters: Proptypes.number,
};

HorizontalList.defaultProps = {
  xs: 1,
  sm: 1,
  md: 3,
  lg: 4,
  xl: 5,
  xxl: 6,
  data: [],
  gutters: 16,
};

export default HorizontalList;
