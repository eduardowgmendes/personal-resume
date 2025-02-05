import { Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

export default function DateFormat({ dateString }) {

  const formatDate = (date) => {
    const [month, year] = date.split(" ");
    const months = {
      Janeiro: "Jan",
      Fevereiro: "Fev",
      Março: "Mar",
      Abril: "Abr",
      Maio: "Mai",
      Junho: "Jun",
      Julho: "Jul",
      Agosto: "Ago",
      Setembro: "Set",
      Outubro: "Out",
      Novembro: "Nov",
      Dezembro: "Dez",
    };

    return `${months[month]} ${year}`;
  };

  return (
    <Flex>
      <Paragraph type="secondary" className="small" style={{margin: 0}} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{formatDate(dateString)}</Paragraph>
    </Flex>
  )
}