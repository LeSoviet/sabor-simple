import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import { TimeParser } from '../utils/timeParser';

interface TimerProps {
  timeText: string;
  onComplete?: () => void;
}

type TimerState = 'idle' | 'running' | 'paused' | 'completed';

export const Timer: React.FC<TimerProps> = ({ timeText, onComplete }) => {
  const timeParser = new TimeParser();
  const totalSeconds = timeParser.parseTimeToSeconds(timeText);
  
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const [state, setState] = useState<TimerState>('idle');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (state === 'running' && remainingSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingSeconds(prev => {
          if (prev <= 1) {
            setState('completed');
            playAlarmSound();
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state, remainingSeconds]);

  useEffect(() => {
    const progress = totalSeconds > 0 ? (totalSeconds - remainingSeconds) / totalSeconds : 0;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [remainingSeconds, totalSeconds]);

  useEffect(() => {
    if (state === 'completed') {
      // Animación de completado
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();

      // Animación de pulso
      const pulse = () => {
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }),
        ]).start(() => {
          if (state === 'completed') {
            pulse();
          }
        });
      };
      pulse();
    } else {
      pulseAnim.setValue(1);
    }
  }, [state]);

  const playAlarmSound = async () => {
    try {
      // Usar Web Audio API para web
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Crear un tono de alarma simple
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 1);
      
    } catch (error) {
      // Fallback: mostrar alerta si no se puede reproducir el sonido
      Alert.alert('¡Tiempo completado!', `${timeText} ha terminado`);
    }
  };

  const handlePress = () => {
    if (state === 'idle' || state === 'paused') {
      setState('running');
    } else if (state === 'running') {
      setState('paused');
    }
  };

  const handlePressIn = () => {
    longPressTimer.current = setTimeout(() => {
      handleReset();
    }, 800); // 800ms para activar el reset
  };

  const handlePressOut = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const handleReset = () => {
    setState('idle');
    setRemainingSeconds(totalSeconds);
    progressAnim.setValue(0);
    scaleAnim.setValue(1);
    pulseAnim.setValue(1);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    switch (state) {
      case 'running': return '#4CAF50';
      case 'paused': return '#FF9800';
      case 'completed': return '#F44336';
      default: return '#2196F3';
    }
  };

  if (totalSeconds === 0) {
    return null; // No mostrar timer si no se detectó tiempo
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.timerTouchable}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.8}
      >
        <Animated.View 
          style={[
            styles.timerContainer,
            { 
              transform: [{ scale: scaleAnim }, { scale: pulseAnim }]
            }
          ]}
        >
          <View style={[styles.progressRing, { borderColor: getTimerColor() }]}>
            <Animated.View
              style={[
                styles.progressFill,
                {
                  borderTopColor: getTimerColor(),
                  transform: [
                    {
                      rotate: progressAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                },
              ]}
            />
            <View style={styles.timerContent}>
              <Text style={[styles.timeText, { color: getTimerColor() }]}>
                {formatTime(remainingSeconds)}
              </Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
      
      <Text style={styles.descriptionText}>{timeText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
  },
  timerTouchable: {
    alignItems: 'center',
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  progressRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  progressFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: 'transparent',
  },
  timerContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});