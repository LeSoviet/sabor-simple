/**
 * Interfaz para representar un tiempo detectado en el texto
 */
export interface DetectedTime {
  /** Texto original encontrado (ej: "10 minutos") */
  originalText: string;
  /** Tiempo en segundos */
  seconds: number;
  /** Posición de inicio en el texto */
  startIndex: number;
  /** Posición de fin en el texto */
  endIndex: number;
}

/**
 * Utilidad para detectar y parsear tiempos en texto
 */
export class TimeParser {
  // Expresiones regulares para detectar diferentes formatos de tiempo
  private static readonly TIME_PATTERNS = [
    // Formato: "10 minutos", "5 mins", "1 minuto"
    /(?:(\d+)\s*(?:minutos?|mins?|min))/gi,
    // Formato: "2 horas", "1 hora", "3 hrs"
    /(?:(\d+)\s*(?:horas?|hrs?))/gi,
    // Formato: "30 segundos", "45 segs", "10 seg"
    /(?:(\d+)\s*(?:segundos?|segs?|seg))/gi,
    // Formato: "1:30" (minutos:segundos), "2:15:30" (horas:minutos:segundos)
    /(?:(\d{1,2}):(\d{2})(?::(\d{2}))?)/g,
  ];

  /**
   * Detecta todos los tiempos en un texto
   */
  static detectTimes(text: string): DetectedTime[] {
    const detectedTimes: DetectedTime[] = [];
    
    this.TIME_PATTERNS.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern.source, pattern.flags);
      
      while ((match = regex.exec(text)) !== null) {
        const originalText = match[0];
        const seconds = this.parseTimeToSeconds(originalText, match);
        
        if (seconds > 0) {
          detectedTimes.push({
            originalText,
            seconds,
            startIndex: match.index,
            endIndex: match.index + originalText.length
          });
        }
      }
    });

    // Ordenar por posición en el texto y eliminar duplicados
    return detectedTimes
      .sort((a, b) => a.startIndex - b.startIndex)
      .filter((time, index, array) => 
        index === 0 || time.startIndex !== array[index - 1].startIndex
      );
  }

  /**
   * Convierte un texto de tiempo a segundos (método público)
   */
  parseTimeToSeconds(timeText: string): number {
    const detectedTimes = TimeParser.detectTimes(timeText);
    return detectedTimes.length > 0 ? detectedTimes[0].seconds : 0;
  }

  /**
   * Convierte un tiempo detectado a segundos (método privado)
   */
  private static parseTimeToSeconds(originalText: string, match: RegExpExecArray): number {
    const lowerText = originalText.toLowerCase();
    
    // Formato de tiempo con dos puntos (1:30, 2:15:30)
    if (originalText.includes(':')) {
      const parts = originalText.split(':').map(p => parseInt(p, 10));
      
      if (parts.length === 2) {
        // mm:ss
        return parts[0] * 60 + parts[1];
      } else if (parts.length === 3) {
        // hh:mm:ss
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
      }
      return 0;
    }
    
    const number = parseInt(match[1], 10);
    
    if (lowerText.includes('hora')) {
      return number * 3600; // horas a segundos
    } else if (lowerText.includes('min')) {
      return number * 60; // minutos a segundos
    } else if (lowerText.includes('seg')) {
      return number; // segundos
    }
    
    return 0;
  }

  /**
   * Formatea segundos a texto legible
   */
  static formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else if (minutes > 0) {
      return `${minutes}:${secs.toString().padStart(2, '0')}`;
    } else {
      return `0:${secs.toString().padStart(2, '0')}`;
    }
  }

  /**
   * Obtiene una descripción textual del tiempo
   */
  static getTimeDescription(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const parts: string[] = [];
    
    if (hours > 0) {
      parts.push(`${hours} ${hours === 1 ? 'hora' : 'horas'}`);
    }
    if (minutes > 0) {
      parts.push(`${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`);
    }
    if (secs > 0 && hours === 0) {
      parts.push(`${secs} ${secs === 1 ? 'segundo' : 'segundos'}`);
    }
    
    return parts.join(' y ') || '0 segundos';
  }
}