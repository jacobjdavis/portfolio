import { Grid } from '@mui/material';
import { useRef, useEffect } from 'react';
export const ViewCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    if (!ctx) return;

    const vertices = [
      [-50, -50, -50],
      [50, -50, -50],
      [50, 50, -50],
      [-50, 50, -50],
      [-50, -50, 50],
      [50, -50, 50],
      [50, 50, 50],
      [-50, 50, 50],
    ];

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];

    const project = (x: number, y: number, z: number) => {
      const fov = 500;
      const scale = fov / (fov + z);
      const tx = x * scale + canvas.width / 2;
      const ty = y * scale + canvas.height / 2;
      return { x: tx, y: ty };
    };

    const rotateX = (vertices: number[][], angleX: number) => {
      const sinX = Math.sin(angleX);
      const cosX = Math.cos(angleX);
      vertices.forEach(vertex => {
        const [x, y, z] = vertex;
        const newY = y * cosX - z * sinX;
        const newZ = y * sinX + z * cosX;
        vertex[1] = newY;
        vertex[2] = newZ;
      });
    };

    // Function to rotate the cube around the y-axis
    const rotateY = (vertices: number[][], angleY: number) => {
      const sinY = Math.sin(angleY);
      const cosY = Math.cos(angleY);
      vertices.forEach(vertex => {
        const [x, y, z] = vertex;
        const newX = x * cosY + z * sinY;
        const newZ = -x * sinY + z * cosY;
        vertex[0] = newX;
        vertex[2] = newZ;
      });
    };

    const draw = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const angleX = 0.01;
      const angleY = 0.05;
      rotateX(vertices, angleX);
      rotateY(vertices, angleY);

      // Loop through edges and draw lines
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.beginPath();
      edges.forEach(edge => {
        const [v1, v2] = edge;
        const [x1, y1, z1] = vertices[v1];
        const [x2, y2, z2] = vertices[v2];
        const p1 = project(x1, y1, z1);
        const p2 = project(x2, y2, z2);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      });
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    // Start the animation
    draw();

    // Clean up
    return () => cancelAnimationFrame(1);
  }, []);
  return (
    <Grid container justifyContent="center" alignItems="center">
      <canvas ref={canvasRef} />
    </Grid>
  );
};
