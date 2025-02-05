import { GithubOutlined, HomeOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Avatar, Flex, Space } from "antd";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function Hero({ profilePicture, name, profileDetails, bio, contactDetails }) {

    return (
        <Flex vertical align="center" justify="center" gap={'middle'} style={{ minHeight: '50vh' }}>

            <Avatar size={64} src={profilePicture} />

            <Flex vertical align="center" style={{ padding: '1rem' }}>
                <Title style={{ margin: 0, textAlign: 'center' }}>{name}</Title>
                <Title
                    level={4}
                    type="secondary"
                    style={{ margin: 0, textAlign: 'center' }}
                    ellipsis={{ rows: 5, expandable: false, symbol: '...' }}
                >
                    {profileDetails.profession}
                </Title>
                <Paragraph>
                    {profileDetails.nationality.concat(', ').concat(profileDetails.age).concat(' anos.')}
                </Paragraph>
                <Paragraph
                    type="secondary"
                    style={{ margin: 0, textAlign: 'center' }}
                    ellipsis={{ rows: 5, expandable: true, symbol: 'Ver mais' }}>
                    {bio}
                </Paragraph>
            </Flex>

            <Flex align="center" justify="center" gap={'large'} style={{ padding: '1rem', textAlign: 'center' }} wrap>
                <Paragraph><HomeOutlined /> {contactDetails.address}</Paragraph>
                <Paragraph><GithubOutlined /> <a href={contactDetails.github} target="_blank" rel="noopener noreferrer">GitHub</a></Paragraph>
                <Paragraph><LinkedinOutlined /> <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></Paragraph>
                <Paragraph><PhoneOutlined /> {contactDetails.mobile}</Paragraph>
                <Paragraph><WhatsAppOutlined /> {contactDetails.whatsapp}</Paragraph>
                <Paragraph><MailOutlined /> {contactDetails.primaryEmail}</Paragraph>
                <Paragraph><MailOutlined /> {contactDetails.secondaryEmail}</Paragraph>
            </Flex>
        </Flex>
    );
}
