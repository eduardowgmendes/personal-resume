import {
    ReadOutlined,
    FacebookOutlined,
    InstagramOutlined,
    IdcardOutlined,
    FileTextOutlined,
    CalculatorOutlined,
    SearchOutlined,
    ExperimentOutlined,
    BugOutlined,
    PlusSquareOutlined,
    HighlightOutlined,
    BulbOutlined,
    CodeOutlined,
    BarChartOutlined,
    ToolOutlined,
    PictureOutlined,
    MailOutlined,
    LayoutOutlined,
    PrinterOutlined,
    HeartOutlined,
    PlayCircleOutlined,
    CloseCircleOutlined,
    UpOutlined,
    ApiOutlined
} from "@ant-design/icons";

const IconUtils = {
    iconMap: {
        "graphic-design": <ReadOutlined />,
        "social-media": <FacebookOutlined />,
        "social-media-content": <InstagramOutlined />,
        "branding": <IdcardOutlined />,
        "office": <FileTextOutlined />,
        "accounting": <CalculatorOutlined />,
        "searching": <SearchOutlined />,
        "prototyping": <ExperimentOutlined />,
        "bugfix": <BugOutlined />,
        "new-feature": <PlusSquareOutlined />,
        "designing": <HighlightOutlined />,
        "brainstorming": <BulbOutlined />,
        "coding": <CodeOutlined />,
        "analysing": <BarChartOutlined />,
        "advertising-design": <PictureOutlined />,
        "email-marketing": <MailOutlined />,
        "frontend": <LayoutOutlined />,
        "print-media": <PrinterOutlined />,
        "interactive-learning": <ExperimentOutlined />,
        "interactive-learning-gamification": <HeartOutlined />,
        "play": <PlayCircleOutlined />,
        "finished": <CloseCircleOutlined />,
        "promoted": <UpOutlined />,
        "fiscal-receiving": <FileTextOutlined />,
        "xml-compliance": <ApiOutlined />,
    },

    /**
     * Retorna o ícone correspondente à keyword ou um ícone padrão.
     * @param {string} keyword - A chave para buscar o ícone.
     * @returns {JSX.Element} O ícone correspondente ou um ícone padrão.
     */
    getIcon(keyword) {
        return IconUtils.iconMap[keyword] || <ToolOutlined />;
    }
};

export default IconUtils;
