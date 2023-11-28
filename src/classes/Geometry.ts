class Geometry {
    private static points: Point[] = [];
  
    constructor(point: Point) {
      Geometry.addPoint(point);
    }
  
    // Adiciona um ponto ao array points
    private static addPoint(point: Point): void {
      Geometry.points.push(point);
    }
  
    // Retorna o array de pontos
    getPoints(): Point[] {
      return Geometry.points;
    }
  
    // Calcula o perímetro total da geometria
    perimeter(): number | never {
      if (Geometry.points.length < 2) {
        throw new Error('Pontos insuficientes para calcular o perímetro.');
      }
  
      let totalPerimeter = 0;
  
      for (let i = 0; i < Geometry.points.length - 1; i++) {
        totalPerimeter += Geometry.points[i].distance(Geometry.points[i + 1]);
      }
  
      // Adiciona a distância do último ponto de volta ao primeiro ponto para fechar a geometria
      totalPerimeter += Geometry.points[Geometry.points.length - 1].distance(Geometry.points[0]);
  
      return totalPerimeter;
    }
  }
  
  export default Geometry;
  