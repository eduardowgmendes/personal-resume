import { Flex, Layout } from "antd";
import Title from "antd/es/typography/Title";

export default function SectionHeader({title}){
    return (
        <Layout style={{padding: '1rem 0 0 0', background: 'transparent'}}>
            <Flex align="end" justify="start" gap={'small'} style={{padding: '1rem 0 0 0'}}>
                <Title level={4}>{title}</Title>
            </Flex>
        </Layout>
    )
}