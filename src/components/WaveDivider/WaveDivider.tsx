interface WaveDividerProps {
  color?: string;
  height?: number;
}

const WaveDivider: React.FC<WaveDividerProps> = () => {
  return (
    <div className="wave-divider">
      <div className="wave"></div>
    </div>
  );
};

export default WaveDivider;