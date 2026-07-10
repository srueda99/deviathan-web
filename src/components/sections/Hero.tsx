"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Bot, TrendingUp, Users, CheckCircle2, Cog, ShoppingCart, Briefcase, LineChart, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// Escenarios simulados del asistente IA
const aiScenarios = [
  {
    query: "Analiza los datos de ventas del Q1...",
    reply: "Análisis completado. Se detectó un patrón alcista notable.",
    highlight: "+24.5% Crecimiento",
    icon: <TrendingUp size={18} className="text-green-600" />,
    color: "bg-green-600/10 text-green-600 border-green-600/30"
  },
  {
    query: "¿Qué mesas VIP estarán ocupadas el sábado?",
    reply: "Consultando base de datos. 12 reservas confirmadas para el sábado.",
    highlight: "85% Ocupación",
    icon: <Users size={18} className="text-orange-600" />,
    color: "bg-orange-600/10 text-orange-600 border-orange-600/30"
  },
  {
    query: "Activa el bot de atención al cliente...",
    reply: "Bot en línea. Resolviendo las consultas en tiempo real.",
    highlight: "14 consultas atendidas hoy",
    icon: <Users size={18} className="text-accent" />,
    color: "bg-accent/10 text-accent border-accent/30"
  },
  {
    query: "¿Cuáles son los productos más vendidos esta semana?",
    reply: "Análisis completado. El producto más vendido esta semana es el...",
    highlight: "+15% en ventas",
    icon: <ShoppingCart size={18} className="text-orange-600" />,
    color: "bg-orange-600/10 text-orange-600 border-orange-600/30"
  },
  {
    query: "¿Cuántas unidades quedan de Jack Daniels en el inventario?",
    reply: "Hay 20 unidades de Jack Daniels en stock.",
    highlight: "Stock completo",
    icon: <ShoppingCart size={18} className="text-green-600" />,
    color: "bg-green-600/10 text-green-600 border-green-600/30"
  },
];

// Escenarios de automatización simulados
const automationScenarios = [
  {
    title: "Sincronizar el inventario de todas las tiendas",
    action: "Actualizando inventarios en tiempo real",
    saved: "Ahorro: 12 horas/sem",
    icon: <ShoppingCart size={20} className="text-primary" />
  },
  {
    title: "Onboarding Corporativo",
    action: "Generando nuevas cuentas y accesos",
    saved: "Ahorro: 3 horas/empleado",
    icon: <Briefcase size={20} className="text-primary" />
  },
  {
    title: "Conciliación Bancaria",
    action: "Cruzando 5,000 transacciones",
    saved: "Ahorro: 4 días/mes",
    icon: <LineChart size={20} className="text-primary" />
  }
];

export function Hero() {
  // Animaciones para el scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Estados para el seguimiento del mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Estado para el widget de IA
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [chatStep, setChatStep] = useState<0 | 1 | 2>(0);

  // Lógica del widget de IA
  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout;
    const runSequence = () => {
      // Fase 1
      setChatStep(0);
      // Fase 2
      t1 = setTimeout(() => setChatStep(1), 1200);
      // Fase 3
      t2 = setTimeout(() => setChatStep(2), 3500);
      // Reinicia la secuencia
      t3 = setTimeout(() => {
        setScenarioIdx((prev) => (prev + 1) % aiScenarios.length);
        runSequence();
      }, 9000);
    };
    runSequence();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);
  const activeScenario = aiScenarios[scenarioIdx];

  // Estado para el widget de automatización
  const [autoScenarioIdx, setAutoScenarioIdx] = useState(0);
  const [autoStep, setAutoStep] = useState<0 | 1 | 2>(0);

  // Lógica del widget de automatización
  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout;
    const runAutoSequence = () => {
      // Fase 1
      setAutoStep(0);
      // Fase 2
      t1 = setTimeout(() => setAutoStep(1), 1000);
      // Fase 3
      t2 = setTimeout(() => setAutoStep(2), 3500);
      // Reinicia la secuencia
      t3 = setTimeout(() => {
        setAutoScenarioIdx((prev) => (prev + 1) % automationScenarios.length);
        runAutoSequence();
      }, 7500);
    };
    runAutoSequence();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);
  const activeAutoScenario = automationScenarios[autoScenarioIdx];

  // Lógica para el seguimiento del mouse
  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Lógica del efecto de deformación
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;
    const spacing = 64;
    let cols = 0;
    let rows = 0;
    let nodes: { ox: number; oy: number; x: number; y: number; vx: number; vy: number }[][] = [];
    let mouse = { x: -1000, y: -1000, radius: 75 };
    // Obtiene la posición del mouse
    const handleCanvasMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    // Limpia la posición del mouse al salir de la pantalla
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", handleCanvasMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    // Inicializa la malla
    const initGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / spacing) + 2;
      rows = Math.ceil(canvas.height / spacing) + 2;
      nodes = [];
      const offsetX = (canvas.width - (cols - 1) * spacing) / 2;
      const offsetY = (canvas.height - (rows - 1) * spacing) / 2;
      for (let i = 0; i < cols; i++) {
        nodes[i] = [];
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;
          nodes[i][j] = { ox: x, oy: y, x: x, y: y, vx: 0, vy: 0 };
        }
      }
    };
    // Animación de deformación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let node = nodes[i][j];
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            // Fuerza de repulsión
            const pushX = Math.cos(angle) * force * 5;
            const pushY = Math.sin(angle) * force * 5;
            node.vx -= pushX;
            node.vy -= pushY;
          }
          // Restaura la posición original
          node.vx += (node.ox - node.x) * 0.05;
          node.vy += (node.oy - node.y) * 0.05;
          node.vx *= 0.75;
          node.vy *= 0.75;
          node.x += node.vx;
          node.y += node.vy;
        }
      }
      // Dibuja la malla
      ctx.beginPath();
      ctx.strokeStyle = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)";
      ctx.lineWidth = resolvedTheme === "dark" ? 2 : 1.5;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let node = nodes[i][j];
          // Conecta hacia la derecha
          if (i < cols - 1) {
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[i + 1][j].x, nodes[i + 1][j].y);
          }
          // Conecta hacia abajo
          if (j < rows - 1) {
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[i][j + 1].x, nodes[i][j + 1].y);
          }
        }
      }
      ctx.stroke();
      animationFrameId = requestAnimationFrame(animate);
    };
    // Inicializa la malla y arranca el bucle de animación
    initGrid();
    animate();
    // Detecta el cambio de tamaño de la pantalla
    const handleResize = () => {
      initGrid();
    };
    window.addEventListener("resize", handleResize);
    // Limpia los eventos cuando el componente se desmonta
    return () => {
      window.removeEventListener("mousemove", handleCanvasMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Canvas para el efecto de deformación */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_30%,transparent_80%)]"
      />
      {/* Gradientes decorativos */}
      <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[150px] mix-blend-screen animate-[pulse-glow_8s_ease-in-out_infinite] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-accent/10 rounded-full blur-[130px] mix-blend-screen animate-[float_10s_ease-in-out_infinite] -z-10 pointer-events-none"></div>
      {/* Contenido principal */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center min-h-screen pt-32 lg:pt-40 pb-20 pointer-events-none">
        {/* Texto izquierdo */}
        <motion.div 
          className="flex flex-col gap-8 lg:col-span-5 col-span-full z-20 pointer-events-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ opacity }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit border border-accent/40 shadow-accent bg-background/50 backdrop-blur-md">
            <Code size={16} className="text-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-foreground/90">Next-Gen Software</span>
          </div>
          {/* Titulo */}
          <h1 className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-[5.5rem] font-black font-kanit leading-[1.1] tracking-tight">
            Construimos el <br/>
            <span className="text-transparent bg-clip-text bg-[linear-gradient(45deg,var(--primary),var(--foreground),var(--primary))] bg-[length:400%_400%] animate-[gradient-xy_5s_ease_infinite]">
              Futuro
            </span><br/>
            de tu Empresa
          </h1>
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-foreground font-open-sans max-w-xl font-normal">
            Desarrollamos software, inteligencia artificial y automatizaciones que impulsan el crecimiento de tu empresa.
          </p>
          {/* Botones */}
          <div className="flex flex-wrap gap-6 mt-4">
            <motion.a 
              href="#services"
              className="group relative px-8 py-4 bg-foreground text-background rounded-full font-bold font-kanit text-lg overflow-hidden flex items-center gap-3 transition-all hover:shadow-[0_0_30px_var(--primary)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-primary"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                Descubrir Más <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            <motion.a 
              href="#contact"
              className="px-8 py-4 glass-card text-foreground rounded-full font-bold font-kanit text-lg hover:bg-foreground/5 transition-all border border-foreground/20 hover:border-accent bg-background/30 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Proyecto
            </motion.a>
          </div>
        </motion.div>

        {/* Widgets */}
        <motion.div 
          className="relative h-[500px] lg:h-[700px] w-full hidden lg:flex items-center justify-center perspective-[1000px] pointer-events-auto lg:col-span-7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{ y: y1 }}
        >
          {/* Widget IA */}
          <motion.div
            className="absolute top-[5%] md:top-[8%] left-[0%] lg:left-[5%] xl:left-[2%] 2xl:left-[3%] w-[340px] md:w-[380px] 2xl:w-[440px] glass-card bg-foreground/5 backdrop-blur-[2px] p-6 2xl:p-8 rounded-[2rem] z-30 shadow-primary border border-foreground/10 overflow-hidden"
            style={{ y: y2 }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-foreground/10">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/20 text-primary shadow-inner">
                <Bot size={24} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#32CD32] rounded-full border-2 border-background animate-pulse shadow-[0_0_10px_#32CD32]"></span>
              </div>
              <div>
                <h3 className="font-kanit font-bold text-foreground text-lg leading-tight">Inteligencia Artificial</h3>
                <p className="text-[10px] text-foreground/50 font-mono tracking-widest uppercase mt-0.5">Especializada en tu negocio</p>
              </div>
            </div>
            {/* Chat */}
            <div className="space-y-4 min-h-[220px] 2xl:min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scenarioIdx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  className="space-y-5"
                >
                  {/* Mensaje de usuario */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex justify-end origin-bottom-right"
                  >
                    <div className="bg-foreground text-background text-sm font-open-sans p-3 px-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-lg border border-foreground/10">
                      {activeScenario.query}
                    </div>
                  </motion.div>

                  {/* Respuesta del Bot */}
                  {chatStep > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="flex justify-start origin-bottom-left"
                    >
                      <div className="bg-secondary/50 backdrop-blur-md border border-foreground/10 text-foreground text-sm font-open-sans p-4 rounded-2xl rounded-tl-sm max-w-[95%] shadow-lg">
                        {chatStep === 1 ? (
                          <div className="flex items-center gap-1.5 h-5 px-2">
                            <motion.div className="w-2 h-2 rounded-full bg-primary" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                            <motion.div className="w-2 h-2 rounded-full bg-primary" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                            <motion.div className="w-2 h-2 rounded-full bg-primary" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <p className="leading-relaxed">{activeScenario.reply}</p>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className={`flex items-center gap-3 p-3 rounded-xl border ${activeScenario.color}`}
                            >
                              <div className="p-1.5 bg-background/50 rounded-lg backdrop-blur-sm">
                                {activeScenario.icon}
                              </div>
                              <span className="font-kanit font-bold tracking-wide">{activeScenario.highlight}</span>
                              <CheckCircle2 size={16} className="ml-auto opacity-50" />
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Widget de Automatizaciones */}
          <motion.div
            className="absolute bottom-[10%] xl:bottom-[20%] right-[0%] xl:right-[-5%] 2xl:right-[-2%] w-[320px] md:w-[360px] 2xl:w-[420px] glass-card bg-foreground/5 backdrop-blur-[2px] p-6 2xl:p-8 rounded-[2rem] z-30 shadow-primary border border-foreground/10 overflow-hidden hidden xl:block"
            style={{ y: y1 }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-foreground/10">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary shadow-inner overflow-hidden border border-primary/20">
                <Cog size={24} className={autoStep === 1 ? 'animate-[spin_1.5s_linear_infinite]' : ''} />
              </div>
              <div>
                <h3 className="font-kanit font-bold text-foreground text-lg leading-tight">Automatización de Procesos</h3>
                <p className="text-[10px] text-foreground/50 font-mono tracking-widest uppercase mt-0.5">Adiós a las tareas repetitivas</p>
              </div>
            </div>
            {/* Body */}
            <div className="min-h-[160px] 2xl:min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={autoScenarioIdx} 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -15, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-foreground/5 rounded-xl border border-foreground/10 shadow-sm">
                      {activeAutoScenario.icon}
                    </div>
                    <span className="font-kanit font-semibold text-sm text-foreground/90">{activeAutoScenario.title}</span>
                  </div>
                  
                  <div className="bg-secondary/80 backdrop-blur-md rounded-xl p-4 border border-foreground/10 shadow-inner">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-mono text-foreground/70">{activeAutoScenario.action}</span>
                      {autoStep === 0 && <span className="text-[10px] uppercase font-bold text-foreground/40 tracking-wider">Esperando</span>}
                      {autoStep === 1 && <span className="text-[10px] uppercase font-bold text-green-600 animate-pulse tracking-wider">Ejecutando</span>}
                      {autoStep === 2 && <span className="text-[10px] uppercase font-bold text-green-600 tracking-wider">Completado</span>}
                    </div>
                    {/* Barra de progreso */}
                    <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden mb-4 shadow-inner">
                      <motion.div
                        className={`h-full ${autoStep === 2 ? 'bg-green-600' : 'bg-green-600'}`}
                        initial={{ width: "0%" }}
                        animate={{ width: autoStep === 0 ? "0%" : autoStep === 1 ? "85%" : "100%" }}
                        transition={{ duration: autoStep === 1 ? 2.5 : 0.3, ease: "linear" }}
                      />
                    </div>
                    {/* Resultado */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {autoStep === 2 ? <CheckCircle2 size={16} className="text-green-600" /> : <Play size={16} className="text-foreground/40" />}
                        <span className={`text-xs font-bold ${autoStep === 2 ? 'text-green-600' : 'text-foreground/40'}`}>
                          {autoStep === 2 ? activeAutoScenario.saved : 'Tarea iniciada'}
                        </span>
                      </div>
                      <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${autoStep === 2 ? 'bg-green-600/20 text-green-600' : 'bg-foreground/10 text-foreground/50'}`}>
                        {autoStep === 2 ? '100%' : '0%'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}