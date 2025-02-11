import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Flex, Grid, Layout, List, Modal, Segmented } from "antd";
;
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import WorkExperienceOverview from "./WorkExperienceOverview";
import ListItem from "./ListItem";
import KanbamItem from "./KanbamItem";
import { IconTools } from "@tabler/icons-react";

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
                <SectionHeader icon={<IconTools size={20} />} title={'Experiência Profissional'} />
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
            <Modal centered width={1000} cancelText='Fechar' okText='OK' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {selectedExperience && <WorkExperienceOverview workExperience={selectedExperience} />}
            </Modal>
        </Layout>
    )
}
