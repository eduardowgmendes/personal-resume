import { Avatar, Badge, Card, Col, Flex, Grid, Layout, Row } from "antd";
import SectionHeader from "./SectionHeader";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import DateFormat from "../utils/DateFormat";
import { CheckCircleOutlined, LoadingOutlined, MinusOutlined, ReadOutlined, RightOutlined, SyncOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { useBreakpoint } = Grid;

export default function Education({ education }) {

    const screens = useBreakpoint();

    return (
        <Layout>
            <SectionHeader title={'Education'} />
            <Card bordered={false} bodyStyle={{padding: 0}}>
                {education.map((item, index) => (
                    
                        
                        <Flex align="center" justify="space-between" gap={'small'} style={{ padding: '2rem' }} key={index}>

                            {
                                item.institutionWebsite && item.institutionLogoUrl ?
                                    <a href={item.institutionWebsite}>
                                        <Avatar shape="circle" size={'large'} src={item.institutionLogoUrl} />
                                    </a> : <Avatar shape="square" size={'large'} icon={<ReadOutlined />} />
                            }

                            <Flex vertical align="start" justify="space-between" style={{ height: '100%', flex: 1, padding: '0 1rem 0 1rem' }}>
                                <Title level={5} ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{item.degree}</Title>
                                <Paragraph type="secondary" ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{item.institution}</Paragraph>
                            </Flex>


                            <Flex vertical align="end" justify="space-between" style={{ height: '100%' }}>
                                {
                                    item.status === 'Finished' ?
                                    
                                    <Flex gap={'small'}>
                                        <CheckCircleOutlined style={{color: 'springgreen'}} />
                                        <Paragraph ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0, color: "seagreen" }}>{item.status}</Paragraph>
                                    </Flex> : 
                                    
                                    <Flex gap={'small'}>
                                        <SyncOutlined spin style={{color: 'skyblue'}}/>
                                        <Paragraph ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0, color: "dodgerblue" }}>{item.status}</Paragraph>
                                    </Flex>
                                    
                                }
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