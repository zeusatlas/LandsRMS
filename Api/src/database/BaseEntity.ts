
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class AppTimestamps {
  @CreateDateColumn({ type: "timestamptz" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at!: Date;
}



