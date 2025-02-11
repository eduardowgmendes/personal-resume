import { Avatar, Flex, Layout } from "antd";
import Title from "antd/es/typography/Title";

export default function SectionHeader({ title, icon }) {
    return (
        <Layout style={{ background: 'transparent' }}>
            {icon ?
                <Flex align="center" justify="space-between" gap={'small'} style={{ padding: '1rem 1rem 1rem 1rem', margin: '1rem 0 0 0' }} wrap>
                    <Avatar icon={icon} size={'middle'} />
                    <Title level={4} style={{ flex: 1, margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{title}</Title>
                </Flex> :
                <Flex align="center" justify="stretch" gap={'small'} style={{ padding: '1rem 0rem 0rem 0rem', margin: '1rem 0 0 0' }}>
                    <Title level={4} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{title}</Title>
                </Flex>
            }
        </Layout>
    )
}