import { useEffect, useRef } from 'react';

export const BackgroundStars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, speed: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let meteors: Meteor[] = [];
        let nebulas: Nebula[] = [];

        class Star {
            x: number; y: number; z: number; size: number; o: number; p: number; ps: number;
            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.z = Math.random() * 5 + 1;
                this.size = Math.random() * 1.5 + 0.5;
                this.o = Math.random() * 0.7 + 0.3;
                this.p = Math.random() * Math.PI;
                this.ps = Math.random() * 0.03 + 0.01;
            }
            update() {
                this.p += this.ps;
                // Constant drift
                this.x += 0.05 / this.z;
                this.y += 0.02 / this.z;
                if (this.x > canvas!.width) this.x = 0;
                if (this.y > canvas!.height) this.y = 0;
            }
            draw(offsetX: number, offsetY: number) {
                const curO = this.o * (0.6 + Math.sin(this.p) * 0.4);
                ctx!.globalAlpha = curO;
                const rx = (this.x + offsetX / this.z) % canvas!.width;
                const ry = (this.y + offsetY / this.z) % canvas!.height;

                ctx!.fillStyle = this.z < 2 ? '#1fc3ff' : '#ffffff';
                ctx!.beginPath();
                ctx!.arc(rx < 0 ? rx + canvas!.width : rx, ry < 0 ? ry + canvas!.height : ry, this.size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        class Meteor {
            x!: number; y!: number; len!: number; speed!: number; opacity!: number; active: boolean;
            constructor() { this.reset(); this.active = false; }
            reset() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height * 0.5;
                this.len = Math.random() * 150 + 50;
                this.speed = Math.random() * 15 + 10;
                this.opacity = 0;
                this.active = false;
            }
            update() {
                if (!this.active && Math.random() < 0.005) this.active = true;
                if (!this.active) return;
                this.x += this.speed;
                this.y += this.speed * 0.5;
                this.opacity += 0.05;
                if (this.opacity > 1) this.opacity = 1;
                if (this.x > canvas!.width + this.len) this.reset();
            }
            draw() {
                if (!this.active) return;
                ctx!.globalAlpha = this.opacity;
                const grad = ctx!.createLinearGradient(this.x, this.y, this.x - this.len, this.y - this.len * 0.5);
                grad.addColorStop(0, '#1fc3ff');
                grad.addColorStop(1, 'transparent');
                ctx!.strokeStyle = grad;
                ctx!.lineWidth = 2;
                ctx!.beginPath();
                ctx!.moveTo(this.x, this.y);
                ctx!.lineTo(this.x - this.len, this.y - this.len * 0.5);
                ctx!.stroke();
            }
        }

        class Nebula {
            x: number; y: number; r: number; c: string; vx: number; vy: number;
            constructor(color: string) {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.r = Math.random() * 400 + 300;
                this.c = color;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }
            draw() {
                const grad = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
                grad.addColorStop(0, this.c);
                grad.addColorStop(1, 'transparent');
                ctx!.globalAlpha = 1;
                ctx!.fillStyle = grad;
                ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = Array.from({ length: 300 }, () => new Star());
            meteors = Array.from({ length: 3 }, () => new Meteor());
            nebulas = [
                new Nebula('rgba(31, 195, 255, 0.08)'),
                new Nebula('rgba(0, 80, 204, 0.05)')
            ];
        };

        const draw = () => {
            ctx!.fillStyle = '#000';
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

            // Smooth mouse motion
            mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
            mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;
            const offX = (mouse.current.x - canvas!.width / 2) * 0.05;
            const offY = (mouse.current.y - canvas!.height / 2) * 0.05;

            nebulas.forEach(n => { n.update(); n.draw(); });

            // Highlight mouse area
            const spot = ctx!.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 400);
            spot.addColorStop(0, 'rgba(31, 195, 255, 0.05)');
            spot.addColorStop(1, 'transparent');
            ctx!.fillStyle = spot;
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

            meteors.forEach(m => { m.update(); m.draw(); });
            stars.forEach(s => { s.update(); s.draw(offX, offY); });

            // Constellations (Selective)
            ctx!.strokeStyle = 'rgba(31, 195, 255, 0.15)';
            ctx!.lineWidth = 0.5;
            for (let i = 0; i < 50; i++) {
                const s1 = stars[i];
                const s2 = stars[i + 1];
                const dist = Math.sqrt(Math.pow(s1.x - s2.x, 2) + Math.pow(s1.y - s2.y, 2));
                if (dist < 150) {
                    ctx!.beginPath();
                    ctx!.moveTo(s1.x + offX / s1.z, s1.y + offY / s1.z);
                    ctx!.lineTo(s2.x + offX / s2.z, s2.y + offY / s2.z);
                    ctx!.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.targetX = e.clientX;
            mouse.current.targetY = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -2, background: '#000' }} />
    );
};
