import { Card, Divider, Flex, Layout } from "antd";
import SectionHeader from "./SectionHeader";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { MinusOutlined } from "@ant-design/icons";

export default function Skills({ skills }) {
    return (
        <Layout>

            <Flex vertical>

                <SectionHeader title={'Skills'} />

                <Card bordered={false} >
                    <Flex vertical>
                        <Title level={5}>Backend</Title>
                        {skills.backend.map((item, index) => (

                            <Paragraph key={index} style={{ margin: 0 }}><span style={{marginInlineEnd: '.5rem'}}><MinusOutlined /></span>{item}</Paragraph>

                        ))}
                    </Flex>
                    <Divider style={{ margin: '1rem 0 1rem 0' }} />
                    <Flex vertical>
                        <Title level={5}>Frontend</Title>
                        {skills.frontend.map((item, index) => (

                            <Paragraph key={index} style={{ margin: 0 }}><span style={{marginInlineEnd: '.5rem'}}><MinusOutlined /></span>{item}</Paragraph>

                        ))}
                    </Flex>
                    <Divider style={{ margin: '1rem 0 1rem 0' }} />
                    <Flex vertical>
                        <Title level={5}>Android</Title>
                        {skills.android.map((item, index) => (

                            <Paragraph key={index} style={{ margin: 0 }}><span style={{marginInlineEnd: '.5rem'}}><MinusOutlined /></span>{item}</Paragraph>

                        ))}
                    </Flex>
                    <Divider style={{ margin: '1rem 0 1rem 0' }} />
                    <Flex vertical>
                        <Title level={5}>Banco de Dados</Title>
                        {skills.databases.map((item, index) => (

                            <Paragraph key={index} style={{ margin: 0 }}><span style={{marginInlineEnd: '.5rem'}}><MinusOutlined /></span>{item}</Paragraph>

                        ))}
                    </Flex>
                    <Divider style={{ margin: '1rem 0 1rem 0' }} />
                    <Flex vertical>
                        <Title level={5}>Ferramentas</Title>
                        {skills.tools.map((item, index) => (

                            <Paragraph key={index} style={{ margin: 0 }}><span style={{marginInlineEnd: '.5rem'}}><MinusOutlined /></span>{item}</Paragraph>

                        ))}
                    </Flex>
                </Card>
            </Flex>
        </Layout>
    )
}