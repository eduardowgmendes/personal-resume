import { Avatar, Badge, Card, Col, Flex, Grid, Layout, Row } from "antd";
import SectionHeader from "./SectionHeader";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import DateFormat from "../utils/DateFormat";
import { MinusOutlined, RightOutlined } from "@ant-design/icons";

const {useBreakpoint} = Grid;

export default function Education({ education }) {
    
    const screens = useBreakpoint();

    return (
        <Layout>
            <SectionHeader title={'Education'} />
            <Card bordered>
                {education.map((item, index) => (
                    <Flex align="center" justify="space-between" gap={'small'} style={{padding: '1rem 0 1rem 0'}} key={index}>
                        
                            <a href={item.institutionWebsite}>
                                <Avatar shape="square" size={'large'} src={item.institutionLogoUrl} />
                            </a>
                        
                            <Flex vertical align="start" justify="space-between" style={{height: '100%', flex: 1, padding: '0 1rem 0 1rem'}}>
                                <Title level={5} ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{margin: 0}}>{item.degree}</Title>
                                <Paragraph type="secondary" ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{margin: 0}}>{item.institution}</Paragraph>
                            </Flex>
                        

                            <Flex vertical align="end" justify="space-between" style={{height: '100%'}}>
                                <Paragraph ellipsis={{ rows: 2, expandable: false, symbol: '...' }} type={`${item.status === "Finished" ? 'success' : 'warning'}`} style={{margin: 0}}>{item.status}</Paragraph>
                                <Flex align="center" justify="space-between" gap={'small'}>
                                    <DateFormat dateString={item.startDate} />
                                    <MinusOutlined />
                                    <DateFormat dateString={item.endDate} />
                                </Flex>
                            </Flex>
                        

                    </Flex>
                ))}
            </Card>
        </Layout>
    )
}