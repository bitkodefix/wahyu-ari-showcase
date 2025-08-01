import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background/50 backdrop-blur-xl">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2025 Wahyu Ari. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>Wahyu Ari</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;