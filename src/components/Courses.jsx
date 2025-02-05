import { Avatar, Card, Flex, Layout } from "antd";
import SectionHeader from "./SectionHeader";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import DateFormat from "../utils/DateFormat";
import { CheckCircleOutlined, MinusOutlined, ReadOutlined, ShopOutlined, SyncOutlined } from "@ant-design/icons";

export default function Courses({ courses }) {
    return (
        <Layout>

            <Flex vertical>

                <SectionHeader title={'Cursos'} />

                <Card bordered={false} size="small">
                    {courses.map((course, index) => (
                        <Flex align="start" justify="space-between" gap={'small'} style={{ padding: '1rem' }} key={index}>

                            {course.institutionWebsite && course.institutionLogoUrl ?

                                <a href={course.institutionWebsite}>
                                    <Avatar shape="square" size={'large'} src={course.institutionLogoUrl} />
                                </a> : <Avatar shape="square" size={'large'} icon={<ShopOutlined />} />

                            }

                            <Flex vertical align="start" justify="space-between" style={{ height: '100%', flex: 1, padding: '0 1rem 0 1rem' }}>
                                <Title level={5} ellipsis={{ rows: 3, expandable: false, symbol: '...' }} style={{ margin: 0, fontWeight: 'bold' }}>{course.name}</Title>
                                <Paragraph className="small" type="secondary" ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{course.institution}</Paragraph>
                            </Flex>


                            <Flex vertical align="end" justify="space-between" style={{ height: '100%' }}>

                                {
                                    course.status === 'Concluído' ?

                                        <Flex gap={'small'} align="center">
                                            <CheckCircleOutlined style={{ color: 'springgreen' }} />
                                            <Paragraph ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0, color: "seagreen" }}>{course.status}</Paragraph>
                                        </Flex>
                                        :
                                        <Flex gap={'small'} align="center">
                                            <SyncOutlined spin />
                                            <Paragraph type="secondary" ellipsis={{ rows: 2, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{course.status}</Paragraph>
                                        </Flex>

                                }

                                <Flex align="center" justify="space-between" gap={'small'}>
                                    <DateFormat dateString={course.startDate} />
                                    <MinusOutlined />
                                    <DateFormat dateString={course.endDate} />
                                </Flex>
                            </Flex>


                        </Flex>
                    ))}
                </Card>

            </Flex>

        </Layout>
    )
}