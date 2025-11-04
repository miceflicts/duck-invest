export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Logo animado */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
              <span className="text-4xl">🦆</span>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 animate-ping"></div>
          </div>
        </div>

        {/* Texto */}
        <h2 className="font-poppins text-2xl font-bold text-foreground mb-2">
          Duck.Invest
        </h2>
        <p className="text-muted-foreground mb-6">
          Carregando dados do Tesouro Direto...
        </p>

        {/* Barra de progresso */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-slide"></div>
        </div>
      </div>
    </div>
  );
}
