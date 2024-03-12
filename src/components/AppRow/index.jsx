import { Col, Row } from "antd";
import PropTypes from "prop-types";

const defaultRow = 12;
const AppRow = ({ children, spans, gutter }) => {
  return (
    <>
      <Row gutter={gutter}>
        {children.map((item, index) => (
          <Col
            xs={spans[index]?.xs || defaultRow}
            sm={spans[index]?.sm || defaultRow}
            md={spans[index]?.md || defaultRow}
            lg={spans[index]?.lg || defaultRow}
            xl={spans[index]?.xl || defaultRow}
            key={index}
          >
            {item}
          </Col>
        ))}
      </Row>
    </>
  );
};

AppRow.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.number,
  spans: PropTypes.arrayOf(PropTypes.object),
};

AppRow.defaultProps = {
  spans: [
    { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 },
    { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 },
  ],
  gutter: 2,
};

export default AppRow;
