import Chart from 'chart.js/auto';
import { useEffect } from "react"
import { users } from '../../data';

function MyChart({votedUsers}) {
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
          labels: ['voted','didn\'t voted'],
          datasets: [
            {
              data: [votedUsers.length,users.length-votedUsers.length],
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