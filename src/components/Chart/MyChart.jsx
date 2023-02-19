import Chart from 'chart.js/auto';
import { useEffect } from "react"
import { users } from '../../data';

function MyChart({votedUsers}) {

  const getvoting=(party)=>{
    const ff=votedUsers.filter(v=>v.votedFor===party).length
    return ff
  }
  Chart.defaults.font.weight="bold"
    let chart;
    const initChart = () => {
        console.log(votedUsers);
      const ctx = document.getElementById('myChart').getContext('2d');
      if (chart) {
        chart.destroy();
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }
      chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['cats','dogs','lions','cows'],
          datasets: [
            {
              data: [getvoting('cats'),getvoting('dogs'),getvoting('lions'),getvoting('cows')],
            },
          ],
        },
        options: {
          plugins:{
            tooltip: {
                callbacks: {
                    label:(context)=>{
                        return ((context.raw/users.length)*100).toFixed(2)+'%'
                    }
                }
              },
              legend:{
                labels:{
                  font:{
                    size:25,
                    weight:'bold',
                    style:'italic'
                  }
                }
              }
          },
          maintainAspectRatio: false,
        },
      });
    };
  
    useEffect(() => {
      initChart();
    }, []);
    return <>
        <div>
            <canvas width={700} height={400} id="myChart"></canvas>
        </div>
    </>
}

export default MyChart