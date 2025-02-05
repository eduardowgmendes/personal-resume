import { Avatar, Button, Card, Col, Collapse, Empty, Flex, Image, List, Popover, Progress, Row, Space, Statistic, Tag, Timeline, Tooltip } from "antd";
import SectionHeader from "./SectionHeader";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { BranchesOutlined, BugOutlined, CheckCircleFilled, ExportOutlined, FieldTimeOutlined, IdcardOutlined, PlayCircleFilled, QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function WorkExperienceOverview({ workExperience }) {

    const [activeKeys, setActiveKeys] = useState([]);

    const createAvatarName = (projectTitle) => {
        let words = projectTitle.split(' ');

        let initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    }

    const formatValue = (value) => {
        if (value >= 1_000_000_000) {
            return (value / 1_000_000_000).toFixed(1) + 'Bi';
        } else if (value >= 1_000_000) {
            return (value / 1_000_000).toFixed(1) + 'Mi';
        } else if (value >= 1_000) {
            return (value / 1_000).toFixed(1) + 'k';
        } else {
            return value.toString();
        }
    }

    const handleCollapseChange = (keys) => {
        setActiveKeys(keys)
    };

    return (
        <Flex vertical>
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <Flex align="center" justify="start" gap={'middle'}>
                        <Avatar shape="square" size={'large'} src={workExperience.companyLogoUrl} />
                        <Flex vertical flex={1}>
                            <Title level={4} style={{ margin: 0 }}>{workExperience.company}</Title>
                            <Title level={5} type='secondary' style={{ margin: 0 }}>{workExperience.role}</Title>
                        </Flex>
                    </Flex>
                </Col>

                <Col span={24}>
                    <Flex align={'center'} justify={'center'} gap={'large'} style={{ padding: '1rem 0 1rem 0' }}>
                        <Paragraph>{workExperience.description}</Paragraph>
                    </Flex>
                </Col>

                <Col span={24}>
                    <SectionHeader title={'Atuou em'} />
                    {workExperience.projects ?
                        <List grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} dataSource={workExperience.projects} renderItem={(project) => (
                            <List.Item>
                                <Card bordered>

                                    <Row gutter={[16, 16]}>

                                        <Col span={24}>
                                            <Flex align="center" justify="stretch" gap={'middle'}>
                                                {project.media.projectLogo.length > 0 ?
                                                    <Avatar shape="square" size={'large'} src={project.media.projectLogo} /> : <Avatar shape="square" size={'large'} icon={<IdcardOutlined />} />
                                                }
                                                <Flex vertical flex={1} justify="center">
                                                    <Title style={{ margin: 0 }} level={4}>{project.name}</Title>
                                                    <Paragraph type="secondary" style={{ margin: 0 }}>{project.category}</Paragraph>
                                                </Flex>
                                                <Tooltip title={'Visitar'}>
                                                    <Button type="icon" icon={<ExportOutlined />} src={project.website} />
                                                </Tooltip>
                                            </Flex>
                                        </Col>

                                        <Col span={24}>
                                            <Flex vertical gap={'small'}>
                                                <Paragraph>{project.description}</Paragraph>
                                            </Flex>
                                        </Col>

                                        <Col span={24}>

                                            <Flex vertical gap={'small'}>

                                                <Flex align="center" justify="space-between" gap={'small'}>
                                                    <Title level={5}>Detalhes</Title>
                                                </Flex>

                                                <Collapse
                                                    collapsible="header"
                                                    ghost
                                                    key={project.id}
                                                    defaultActiveKey={activeKeys}
                                                    items={[{
                                                        key: 1,
                                                        label: 'Ferramentas Utilizadas',
                                                        children:
                                                            <Row gutter={[16, 16]}>
                                                                <Col span={24}>
                                                                    <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }} >
                                                                        <Space direction="horizontal" align="center" size={'middle'}>
                                                                            <Title level={5}>Tecnologias</Title>
                                                                        </Space>

                                                                        {project.tools.technologies ?
                                                                            <Flex gap={'small'} wrap>{
                                                                                project.tools.technologies.map((tech, index) => (
                                                                                    <Tag key={index}>{tech}</Tag>
                                                                                ))
                                                                            }
                                                                            </Flex>
                                                                            : <Empty description='No tech available.' />}
                                                                    </Flex>
                                                                </Col>
                                                            </Row>
                                                    }, {
                                                        key: 2,
                                                        label: 'Atuação',
                                                        children:
                                                            <Row gutter={[16, 16]}>

                                                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>

                                                                    <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }}>
                                                                        <Flex align="center" justify="space-between" gap={'small'}>
                                                                            <Title level={5}>Estatísticas</Title>
                                                                            {project.time.tasks.caption &&
                                                                                <Popover content={<Paragraph>{project.time.tasks.caption}</Paragraph>}
                                                                                    title={project.time.tasks.title} trigger={'hover'}>
                                                                                    <Button size="small" type="icon" shape='circle' icon={<QuestionCircleOutlined />} />
                                                                                </Popover>
                                                                            }
                                                                        </Flex>

                                                                        <Row gutter={[8, 8]}>

                                                                            <Col xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                <Statistic style={{ flex: 1 }} prefix={<BranchesOutlined />} title='Tasks Entregues' value={project.time.tasks.tasksDelivered} />
                                                                            </Col>

                                                                            <Col xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                <Statistic style={{ flex: 1 }} prefix={<FieldTimeOutlined />} title='Atuação no Projeto' value={project.time.totalPlayed} />
                                                                            </Col>

                                                                            <Col xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                <Statistic style={{ flex: 1 }} prefix={<UserOutlined />} title='Alcance do Projeto' value={formatValue(project.reach)} />
                                                                            </Col>

                                                                            <Col xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                <Statistic style={{ flex: 1 }} title='Dimensões do Projeto' value={project.dimension} />
                                                                            </Col>

                                                                        </Row>

                                                                    </Flex>

                                                                </Col>

                                                                <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>

                                                                    <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }}>

                                                                        <Flex align="center" justify="space-between" gap={'small'}>
                                                                            <Title level={5} style={{ flex: 1 }}>Balanço de Tempo</Title>
                                                                            {project.time.spent.caption &&
                                                                                <Popover content={<Paragraph>{project.time.spent.caption}</Paragraph>} title={'Balanço de Tempo'} trigger={'hover'}>
                                                                                    <Button size="small" type="icon" shape='circle' icon={<QuestionCircleOutlined />} />
                                                                                </Popover>
                                                                            }
                                                                        </Flex>

                                                                        <Flex gap={'small'} vertical>
                                                                            {project.time.spent.values ? project.time.spent.values.map((time, index) => (
                                                                                <Row gutter={[8, 8]} key={index}>
                                                                                    <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                        <Tag key={index} color={time.color}>{time.name}</Tag>
                                                                                    </Col>
                                                                                    <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                        <Progress strokeColor={time.color} key={index} percent={time.value} />
                                                                                    </Col>
                                                                                </Row>
                                                                            )) : <Empty description='' />}
                                                                        </Flex>

                                                                    </Flex>

                                                                </Col>

                                                            </Row>
                                                    }]}
                                                    onChange={handleCollapseChange} />

                                            </Flex>

                                        </Col>

                                        <Col span={24}>
                                            {project.media.projectImages && project.media.projectImages.length > 0 &&
                                                <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }}>
                                                    <Flex align="center" justify="space-between" gap={'small'}>
                                                        <Title level={5}>Galeria</Title>
                                                    </Flex>
                                                    <Flex align="center" justify="center">
                                                        <Image.PreviewGroup>
                                                            <List
                                                                grid={{
                                                                    gutter: [16, 16],
                                                                    xs: 2,
                                                                    sm: 2,
                                                                    md: 4,
                                                                    lg: 4,
                                                                    xl: 4,
                                                                    xxl: 4,
                                                                }}
                                                                dataSource={project.media.projectImages}
                                                                renderItem={(image) => (
                                                                    <Card hoverable bordered style={{ overflow: 'hidden', borderRadius: '1rem', margin: '.5rem' }} bodyStyle={{ padding: 0 }}>
                                                                        <Image key={image.pictureUrl} width={'100%'} src={image.pictureUrl} />
                                                                    </Card>
                                                                )}
                                                            />
                                                        </Image.PreviewGroup>

                                                    </Flex>
                                                </Flex>
                                            }
                                        </Col>

                                    </Row>

                                </Card>
                            </List.Item >
                        )
                        } />
                        :
                        <Empty description='Nenhum projeto encontrado.' />}
                </Col >

                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} >
                    <Flex vertical gap={'large'}>
                        <SectionHeader title={'Vínculo'} />
                        <Timeline mode='left' items={[
                            {
                                dot: <PlayCircleFilled />,
                                children: `Iniciado em ${workExperience.startDate}`,
                                color: 'springgreen',
                            },
                            {
                                dot: <CheckCircleFilled style={{ color: 'springgreen' }} />,
                                children: `Finalizado em ${workExperience.endDate}`,
                                color: 'crimsom',
                            }
                        ]} />
                    </Flex>
                </Col>

                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <Flex vertical gap={'large'}>
                        <SectionHeader title={'Também atuou em'} />
                        {workExperience.alsoWorkedOn && workExperience.alsoWorkedOn.length > 0 ?
                            <List size="small" grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} dataSource={workExperience.alsoWorkedOn} renderItem={(item) => (
                                <List.Item>
                                    <Flex align="center" justify="space-between" gap={'middle'}>
                                        {item.media.projectLogo ?
                                            <Avatar size={'small'} src={item.media.projectLogo} />
                                            :
                                            <Avatar size={'small'}>{createAvatarName(item.name)}</Avatar>
                                        }

                                        <Flex vertical justify='center' size={'small'} flex={1} wrap >
                                            <Paragraph style={{ margin: 0 }}>{item.name}</Paragraph>
                                            <Paragraph type="secondary" style={{ margin: 0 }}>{item.description}</Paragraph>
                                        </Flex>
                                    </Flex>
                                </List.Item>
                            )} /> : <Flex align="center" justify="space-between" gap={'middle'} style={{ padding: '1rem 0 1rem 0' }}><Empty description='Nenhum projeto encontrado.' /></Flex>}
                    </Flex>
                </Col>

                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <Flex vertical justify="start" gap={'large'}>
                        <SectionHeader title={'Achievements'} />

                        {workExperience.achievements && workExperience.achievements.length > 0 ?
                            workExperience.achievements.map((achievement) => (
                                <Flex align="center" justify="start" gap={'middle'}>
                                    <Flex vertical justify='center' size={'small'} flex={1} wrap >
                                        <Paragraph style={{ margin: 0 }}>{achievement.name}</Paragraph>
                                        <Paragraph type="secondary" style={{ margin: 0 }}>{achievement.description}</Paragraph>
                                    </Flex>
                                </Flex>
                            )) : <Flex align="center" justify="space-between" gap={'middle'} style={{ padding: '1rem 0 1rem 0' }}><Empty description='Nenhum achievement encontrado.' /></Flex>}
                    </Flex>
                </Col>

            </Row >
        </Flex >
    )
}