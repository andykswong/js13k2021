import { aabb, clamp, quat, ReadonlyAABB, vec3 } from 'munum';
import { BLOOD_COLOR, ICE_COLOR } from './const';
import { Node } from './core/node';
import { body, Body } from './core/physics';
import { player, projectiles } from './init';
import { Meshes } from './models/meshes';
import { Projectile } from './projectiles';

const WALKER_SHAPE = aabb.create([-.5, 0, -.5], [.5, 1.5, .5]);
const FLIER_SHAPE = aabb.create([-.6, 2.4, -.6], [.6, 3.6, .6]);
const WATCHER_SHAPE = aabb.create([-.6, .4, -.6], [.6, 1.6, .6]);

export class Enemy extends Node {
  public timer: number = 0;
  public body: Body;

  public constructor(
    parent: Node,
    public id: number,
    shape: ReadonlyAABB,
    gravity: boolean,
    public hp: number,
    public atk: number
  ) {
    super(parent);
    this.body = body(this, shape, gravity);
  }

  public update(t: number, dt: number): void {
    super.update(t, dt);

    this.timer = Math.max(0, this.timer - dt);
    if (this.hp && !this.timer && Math.random() < dt / 10 * this.id) {
      this.timer = this.atk;
      this.shoot();
    }
  }

  public shoot(): void {}
}

export class Walker extends Enemy {
  public constructor(
    parent: Node,
    public eyeType: number = 0,
    hp: number = 1
  ) {
    super(parent, 1 + eyeType, WALKER_SHAPE, true, hp, 5);

    const eye = new Node(this);
    eye.mesh = { id: eyeType ? Meshes.eye2 : Meshes.eye };
    const foot1 = new Node(this);
    foot1.mesh = { id: Meshes.foot };
    const foot2 = new Node(this);
    foot2.mesh = { id: Meshes.foot };
    // foot1.mesh.c = foot2.mesh.c = eye.mesh.c = [0, 0, 0, 0];
  }

  public update(t: number, dt: number): void {
    const theta = -3 * t;
    vec3.set(this.child[0].t, 0, -.1 * Math.cos(2 * theta), 0);
    vec3.set(this.child[1].t, -.35, Math.max(.1, .1 * (1 + Math.sin(theta))), .25 + .1 * Math.cos(theta));
    vec3.set(this.child[2].t, .35, Math.max(.1, .1 * (1 + Math.sin(theta + Math.PI))), .25 + .1 * Math.cos(theta + Math.PI));

    super.update(t, dt);
  }

  public shoot(): void {
    if (this.eyeType) {
      const projectile = new Projectile(projectiles, BLOOD_COLOR, false);
      vec3.set(projectile.body!.pos, this.m[12], this.m[13] + 1, this.m[14]);
      vec3.set(projectile.body!.v, 0, 0, 10);
    }
  }
}

export class Flier extends Enemy {
  public root: Node;

  public constructor(
    parent: Node,
    public eyeType: number = 0,
    hp: number = 1
  ) {
    super(parent, 3 + eyeType, FLIER_SHAPE, false, hp, 3);
    const mesh = this.root = new Node(this);
    mesh.mesh = { id: eyeType ? Meshes.eye2 : Meshes.eye };
    const wing1 = new Node(mesh);
    wing1.mesh = { id: Meshes.wing };
    const wing2 = new Node(mesh);
    wing2.mesh = { id: Meshes.wing };
    // wing1.mesh.c = wing2.mesh.c = mesh.mesh.c = [0, 0, 0, 0];
  }

  public update(t: number, dt: number): void {
    const theta = Math.abs(Math.sin(-3 * t));
    vec3.set(this.root.t, 0, 3 - Math.cos(theta), 0);
    quat.fromAxisAngle([1, 0, 0], clamp(Math.atan2(this.m[13] + 2 - player.m[13], player.m[14] - this.m[14] + .5), 0, Math.PI / 3), this.root.r);
    quat.fromAxisAngle([0, 1, 0], -Math.PI * theta / 3, this.root.child[0].r);
    quat.fromAxisAngle([0, 1, 0], Math.PI * (1 + theta / 3), this.root.child[1].r);

    super.update(t, dt);
  }

  public shoot(): void {
    if (this.eyeType) {
      const projectile = new Projectile(projectiles, BLOOD_COLOR, false);
      vec3.set(projectile.body!.pos, this.m[12], this.m[13] + 3, this.m[14]);
      const projV = vec3.set(projectile.body!.v, 0, 0, 10);
      quat.rotateVec3(projV, this.root.r, projV);
    }
  }
}

export class Watcher extends Enemy {
  public constructor(
    parent: Node,
    hp: number = 1
  ) {
    super(parent, 5, WATCHER_SHAPE, true, hp, 0);
    this.mesh = { id: Meshes.watcher };
  }
  
  public shoot(): void {
    const projectile = new Projectile(projectiles, ICE_COLOR, false, .75);
    vec3.set(projectile.body!.pos, this.m[12], this.m[13] + 1, this.m[14]);
    vec3.set(projectile.body!.v, 0, 0, 50);
  }
}