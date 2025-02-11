import { Avatar, Badge, Card, Col, Flex, Grid, Layout, Row } from "antd";
import SectionHeader from "./SectionHeader";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import DateFormat from "../utils/DateFormat";
import { CheckCircleOutlined, LoadingOutlined, MinusOutlined, ReadOutlined, RightOutlined, SyncOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSchool } from "@tabler/icons-react";

const { useBreakpoint } = Grid;

export default function Education({ education }) {

    const screens = useBreakpoint();

    return (
        <Layout>
            <SectionHeader icon={<IconSchool size={20} />} title={'Formação'} />
            <Card bordered={false} size="small">
                {education.map((item, index) => (

                    <Flex align="start" justify="space-between" gap={'small'} style={{ padding: '1rem' }} key={index}>

                        {
                            item.institutionWebsite && item.institutionLogoUrl ?
                                <a href={item.institutionWebsite} target="_blank" rel="noopener noreferrer">
                                    <Avatar shape="circle" size={'large'} src={item.institutionLogoUrl} />
                                </a> : <Avatar shape="square" size={'large'} icon={<ReadOutlined />} />
                        }

                        <Flex vertical align="start" justify="space-between" style={{ height: '100%', flex: 1, padding: '0 1rem 0 1rem' }}>
                            <Title level={5} ellipsis={{ rows: 3, expandable: false, symbol: '...' }} style={{ margin: 0, fontWeight: 'bold', wordBreak: "keep-all" }}>{item.degree}</Title>
                            <Paragraph className="small" type="secondary" ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0, wordBreak: "keep-all" }}>{item.institution}</Paragraph>
                        </Flex>


                        <Flex vertical align="end" justify="space-between" style={{ height: '100%' }}>
                            {
                                item.status === 'Concluído' ?

                                    <Flex gap={'small'}>
                                        <CheckCircleOutlined style={{ color: 'springgreen' }} />
                                        <Paragraph ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0, color: "seagreen" }}>{item.status}</Paragraph>
                                    </Flex> :

                                    <Flex gap={'small'}>
                                        <LoadingOutlined spin />
                                        <Paragraph type="secondary" ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{item.status}</Paragraph>
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