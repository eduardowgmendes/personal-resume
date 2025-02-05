import { AppstoreFilled, AppstoreOutlined, BarsOutlined, MinusOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Flex, Grid, Layout, List, Modal, Row, Segmented } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import SectionHeader from "./SectionHeader";
import DateFormat from "../utils/DateFormat";
import { useState } from "react";
import WorkExperienceOverview from "./WorkExperienceOverview";
import ListItem from "./ListItem";
import KanbamItem from "./KanbamItem";

const { useBreakpoint } = Grid;

export default function WorkExperience({ workExperience }) {

    const screens = useBreakpoint();

    const [isModalOpen, setModalOpen] = useState(false);

    const [selectedExperience, setSelectedExperience] = useState(null);

    const [layout, setLayout] = useState('list');

    const showModal = (experience) => {
        setSelectedExperience(experience);
        setModalOpen(true);
    }

    const handleOk = () => {
        setModalOpen(false);
        setSelectedExperience(null);
    }

    const handleCancel = () => {
        setModalOpen(false);
        setSelectedExperience(null);
    }

    const handleLayoutChange = (key) => {
        setLayout(key)
    }

    return (
        <Layout>
            <Flex align="center" justify="space-between" gap={'large'}>
                <SectionHeader title={'Experiências'} />
                <Segmented onChange={handleLayoutChange} options={[
                    { value: 'list', icon: <BarsOutlined /> },
                    { value: 'kanbam', icon: <AppstoreOutlined /> }
                ]} />
            </Flex>

            <List
                grid={layout === 'kanbam' ? {
                    gutter: 16,
                    xs: 2,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                } : null}

                dataSource={workExperience}
                renderItem={(experience) => (
                    <List.Item>
                        {layout === 'kanbam' ? <KanbamItem workExperience={experience} showModal={showModal} /> : <ListItem workExperience={experience} showModal={showModal} />}
                    </List.Item>
                )} />

            {/* Modal deve ser exibido apenas se houver uma experiência selecionada */}
            <Modal centered width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {selectedExperience && <WorkExperienceOverview workExperience={selectedExperience} />}
            </Modal>
        </Layout>
    )
}
