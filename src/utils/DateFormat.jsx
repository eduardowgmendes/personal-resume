import { Flex } from "antd";

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
      <small style={{ lineHeight: '1rem' }}>{formatDate(dateString)}</small>
    </Flex>
  )
}