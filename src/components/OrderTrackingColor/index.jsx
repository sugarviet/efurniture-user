import React from 'react'
import { Divider, Flex, Tag } from 'antd';
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    SyncOutlined,
    CarOutlined,
    RedoOutlined
} from '@ant-design/icons';


const TYPE = {
    Pending: {
        color: 'gold',
        icon: <ClockCircleOutlined />
    },
    Processing: {
        color: 'processing',
        icon: <SyncOutlined spin />
    },
    Shipping: {
        color: 'purple',
        icon: <CarOutlined />
    },
    Done: {
        color: 'success',
        icon: <CheckCircleOutlined />
    },
    Cancelled: {
        color: 'error',
        icon: <MinusCircleOutlined  />
    },
    Refunded: {
        color: 'cyan',
        icon: <RedoOutlined />
    },
    Failed: {
        color: 'red',
        icon: <ExclamationCircleOutlined />
    },

}

function OrderTrackingColor({ type }) {
    const { color,icon } = TYPE[type]
    return (
        <div>
            <p className="font-HelveticaBold text-[16px] text-[#FF6571] leading-[1.4] tracking-[0.04em] pl-2 uppercase">
                <Tag icon={icon}  color={color}>
                    {type}
                </Tag>
            </p>
        </div>
    )
}

export default OrderTrackingColor