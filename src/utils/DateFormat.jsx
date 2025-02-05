import { Flex } from "antd";

export default function DateFormat({dateString}){
    
    const formatDate = (date) => {
        const [month, year] = date.split(" ");
        const months = {
          January: "Jan",
          February: "Feb",
          March: "Mar",
          April: "Apr",
          May: "May",
          June: "Jun",
          July: "Jul",
          August: "Aug",
          September: "Sep",
          October: "Oct",
          November: "Nov",
          December: "Dec",
        };
    
        return `${months[month]} ${year}`;
      };

      return (
        <Flex>
          <small style={{lineHeight: '1rem'}}>{formatDate(dateString)}</small>
        </Flex>
      )
}