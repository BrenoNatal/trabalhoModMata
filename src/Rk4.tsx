import { Parser } from "expr-eval";
import Plot from "react-plotly.js";

interface calcInput {
    x0: number,
    y0: number,
    t0: number,
    h: number,
    n: number,
    func1: string,
    func2: string,

}
 
function L1(x0:number, y0:number, t0:number, func:string){

    return Parser.evaluate(func, {x: x0, y: y0, t: t0})
}

function L2(x0:number, y0:number, t0:number, func:string){

    return Parser.evaluate(func, {x: x0, y: y0, t: t0})
}

export default function RK4({x0, y0, t0, h, n, func1, func2}:calcInput){

    var x = [];
    var y = [];
    var t = [];

    x[0] = x0;
    y[0] = y0;
    t[0] = t0;

    var k1f1 = 0;
    var k1f2 = 0;

    var k2f1 = 0;
    var k2f2 = 0;

    var k3f1 = 0;
    var k3f2 = 0;

    var k4f1 = 0;
    var k4f2 = 0;
    

    for (var i = 0; i < n; i++){
        
        t[i + 1] = t[i] + h;

        k1f1 = L1(x[i], y[i], t[i], func1);
        k1f2 = L2(x[i], y[i], t[i], func2);

        k2f1 = h * L1(x[i] + k1f1 / 2, y[i] + k1f2 /2, t[i] + h/2, func1);
        k2f2 = h * L2(x[i] + k1f1 / 2, y[i] + k1f2 /2, t[i] + h/2, func2);

        k3f1 = h * L1(x[i] + k1f1 / 2, y[i] + k1f2 /2, t[i] + h/2, func1);
        k3f2 = h * L2(x[i] + k1f1 / 2, y[i] + k1f2 /2, t[i] + h/2, func2);

        k4f1 = h * L1(x[i] + (h*k3f1), y[i] + (h*k3f2), t[i] + h, func1);
        k4f2 = h * L2(x[i] + (h*k3f1), y[i] + (h*k3f2), t[i] + h, func2);

        x[i + 1] = x[i] + (1/6) * (k1f1 + 2 * k2f1 + 2 * k3f1 + k4f1)
        y[i + 1] = y[i] + (1/6) * (k1f2 + 2 * k2f2 + 2 * k3f2 + k4f2)
    }

    return (
        <Plot
            data={[
                {
                    x: t,
                    y: x,
                    type: 'scatter',
                    mode: 'lines',
                    name: 'linha x',
                    marker: { color: 'red' },
                },
                {
                    x: t,
                    y: y,
                    type: 'scatter',
                    mode: 'lines',
                    name: 'linha y',
                    marker: { color: 'blue' },
                },
            ]}

            layout={{ width: 1000, height: 500, title: 'Grafico' }} />
      
    );
}