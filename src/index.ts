import express, { Request, Response } from 'express';
import Point from './classes/Point'; // Importe a classe Point
import Geometry from './classes/Geometry'; // Importe a classe Geometry

const app = express();
const port = 3012;

app.get('/um/:x/:y', (req: Request, res: Response) => {
  const x = parseInt(req.params.x, 10);
  const y = parseInt(req.params.y, 10);

  const ponto = new Point(x, y);
  const geometria = new Geometry(ponto);

  // Adicione um ponto ao array points (por exemplo, um ponto fixo)
  geometria.constructor(new Point(4, 6));

  // Retorna os pontos da geometria e o perímetro
  res.json({
    points: geometria.getPoints(),
    perimeter: geometria.perimeter(),
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
