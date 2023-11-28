class Point {
    private x: number;
    private y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    // Método para calcular a distância entre dois pontos
    distance(point: Point): number {
      const dx = this.x - point.getX();
      const dy = this.y - point.getY();
      return Math.sqrt(dx * dx + dy * dy);
    }
  
    // Método para representação textual do ponto
    toString(): string {
      return `(${this.x}, ${this.y})`;
    }
  
    // Métodos para obter as coordenadas x e y
    getX(): number {
      return this.x;
    }
  
    getY(): number {
      return this.y;
    }
  }
  
  // Exemplo de uso da classe Point
  const ponto1 = new Point(1, 2);
  const ponto2 = new Point(4, 6);
  
  console.log(`Ponto 1: ${ponto1.toString()}`);
  console.log(`Ponto 2: ${ponto2.toString()}`);
  console.log(`Distância entre os pontos: ${ponto1.distance(ponto2)}`);
  