import { Flex, Layout } from "antd";
import Title from "antd/es/typography/Title";

export default function SectionHeader({ title }) {
    return (
        <Layout style={{ background: 'transparent' }}>
            <Flex align="center" justify="stretch" gap={'small'} style={{padding: '1rem'}}>
                <Title level={4} style={{ margin: 0 }}>{title}</Title>
            </Flex>
        </Layout>
    )
}