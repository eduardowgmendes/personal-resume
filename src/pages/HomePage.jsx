import { Col, Flex, Layout, Row } from "antd";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Courses from "../components/Courses";

export default function HomePage({ personalResume }) {
    return (
        <Layout style={{ minWidth: '100vw', padding: '2rem 0 2rem 0' }}>

            <Row>
                
                <Col xs={{span: 24, offset: 0}} md={{span: 24, offset: 0}} xl={{span: 20, offset: 2}} xxl={{span: 16, offset: 4}}>    
                    
                    <Flex vertical style={{ padding: '1rem' }}>
                        
                        <Hero 
                            profilePicture={'./profile-picture.jpg'} 
                            name={personalResume.name} 
                            profileDetails={personalResume.profile} 
                            bio={personalResume.bio} 
                            contactDetails={personalResume.contact} />

                        <Row gutter={[8, 8]}>
                            
                            <Col xs={24} sm={24} md={24} xl={16} xxl={16}>
                                <WorkExperience workExperience={personalResume.workExperience} />
                                <Education education={personalResume.education} />
                                <Courses courses={personalResume.courses} />
                            </Col>

                            <Col xs={24} sm={24} md={24} xl={8} xxl={8}>
                                <Skills skills={personalResume.skills}/>
                            </Col>

                        </Row>

                    </Flex>
                
                </Col>

            </Row>

        </Layout>
    )
}